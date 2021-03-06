<template>
	<div class="sd-select" :class="rootClasses">
		<div
			class="sd-select__content"
			role="combobox"
			tabindex="0"
			aria-autocomplete="list"
			aria-haspopup="true"
			:aria-owns="listboxId"
			:aria-labelledby="textboxId"
			:aria-expanded="isExpanded"
			:aria-activedescendant="activeItemId"
			:aria-disabled="disabled"
			@click="onClick"
			@blur="toggleMenu(false)"
			@keyup.enter="onEnter"
			@keyup.up="onArrowUp"
			@keyup.down="onArrowDown"
		>
			<span
				:id="textboxId"
				class="sd-select__current-selection"
				role="textbox"
				aria-readonly="true"
			>
				<template v-if="selectedItemIndex > -1">
					{{ prefix }}
				</template>
				{{ currentSelection }}
			</span>
			<sd-icon class="sd-select__handle" :icon="icons.sdIconExpand">
			</sd-icon>
		</div>
		<sd-select-menu
			v-if="showMenu"
			:items="items"
			:active-item-index="activeItemIndex"
			:selected-item-index="selectedItemIndex"
			:listbox-id="listboxId"
			@select="onSelect"
			@active-item-change="onActiveItemChange"
		>
		</sd-select-menu>
	</div>
</template>

<script>
import Icon from './Icon.vue';
import SelectMenu from './SelectMenu.vue';
import { sdIconExpand } from '../icons.js';

/**
 * @file Select
 *
 * Select component with SelectMenu dropdown.
 *
 * This component takes a set of items as a prop (item data can take various
 * forms; see SelectMenu.vue for details) and passes those items to the
 * SelectMenu component for display. This component controls when the menu is
 * shown, shows the selected item if there is one, and emits the selected item
 * value to the parent.
 */
// @vue/component
export default {
	name: 'SdSelect',

	components: {
		'sd-icon': Icon,
		'sd-select-menu': SelectMenu
	},

	props: {
		/**
		 * Name must be provided to ensure unique aria attributes. Should be a
		 * valid as a CSS id.
		 */
		name: {
			type: String,
			required: true
		},

		/**
		 * Displayed when no item is selected. If omitted, the first item will
		 * be selected and displayed initially (or the selected item is one is
		 * provided as a prop).
		 */
		label: {
			type: String,
			default: null
		},

		/** See SelectMenu.vue for allowed formats for items. */
		items: {
			type: [ Array, Object ],
			required: true
		},

		/**
		 * If an item should be selected on component mount, the selected item
		 * index can be included via this prop.
		 */
		initialSelectedItemIndex: {
			type: Number,
			default: -1
		},

		disabled: {
			type: Boolean
		},

		/**
		 * Prefix will be shown before the selected value, e.g. "Sort by:"
		 */
		prefix: {
			type: [ String, Object ],
			default: ''
		}
	},

	data: function () {
		return {
			showMenu: false,
			icons: { sdIconExpand },
			activeItemIndex: -1,
			selectedItemIndex: this.initialSelectedItemIndex
		};
	},

	computed: {
		/**
		 * @return {string} The user-visible label for the current selection
		 */
		currentSelection: function () {
			if ( this.selectedItemIndex === -1 ) {
				return this.label;
			} else {
				return this.items[ this.selectedItemIndex ].label;
			}
		},

		/**
		 * @return {Object}
		 */
		rootClasses: function () {
			return {
				'sd-select--open': this.showMenu,
				'sd-select--disabled': this.disabled,
				// This class can be used by other components (e.g. Tabs) to
				// style component differently depending on whether or not a
				// value has been selected.
				'sd-select--value-selected': this.selectedItemIndex > -1
			};
		},

		/**
		 * For the aria-expanded attribute of the input, we need to use strings
		 * instead of booleans so that aria-expanded will be set to "false" when
		 * appropriate rather than the attribute being omitted, which is what
		 * would happen if we used a boolean false.
		 *
		 * @return {string}
		 */
		isExpanded: function () {
			return this.showMenu ? 'true' : 'false';
		},

		/**
		 * @return {string}
		 */
		textboxId: function () {
			return this.name + '__textbox';
		},

		/**
		 * @return {string}
		 */
		listboxId: function () {
			return this.name + '__listbox';
		},

		/**
		 * The ID of the element of the active menu item.
		 *
		 * @return {string|boolean}
		 */
		activeItemId: function () {
			return this.activeItemIndex > -1 ?
				this.listboxId + '-item-' + this.activeItemIndex :
				false;
		},

		/**
		 * @return {number} Number of items
		 */
		itemsLength: function () {
			if ( Array.isArray( this.items ) ) {
				return this.items.length;
			}

			if ( typeof this.items === 'object' ) {
				return Object.keys( this.items ).length;
			}

			return 0;
		}
	},

	methods: {
		/**
		 * Toggle menu state on click.
		 */
		onClick: function () {
			this.toggleMenu( !this.showMenu );
		},

		/**
		 * Handle enter keypress.
		 *
		 * @fires select
		 * @return {void}
		 */
		onEnter: function () {
			var value, keys;

			// If the menu is hidden, show it.
			if ( !this.showMenu ) {
				this.toggleMenu( true );
				return;
			}

			// If the menu is showing but there's no active item, close the menu.
			if ( this.activeItemIndex < 0 ) {
				this.toggleMenu( false );
				return;
			}

			// Otherwise:
			// - Show the selected item in the content box
			// - Store the selected item index so it can be styled as such if
			//   the menu is reopened
			// - Emit the selected item to the parent
			// - Hide the menu
			if (
				Array.isArray( this.items ) &&
				this.items.length &&
				typeof this.items[ 0 ] === 'string'
			) {
				// Handle array of strings.
				value = this.items[ this.activeItemIndex ];
			} else if (
				Array.isArray( this.items ) &&
				this.items.length &&
				typeof this.items[ 0 ] === 'object'
			) {
				// Handle array of objects.
				value = this.items[ this.activeItemIndex ].value;
			} else if ( typeof this.items === 'object' ) {
				// Handle object.
				keys = Object.keys( this.items );
				value = keys[ this.activeItemIndex ];
			}

			this.selectedItemIndex = this.activeItemIndex;
			this.$emit( 'select', value );
			this.toggleMenu( false );
		},

		/**
		 * Handle item click.
		 *
		 * @param {number} index
		 * @param {Object} item
		 * @param {string} item.label Selected item's human-readable label
		 * @param {string} item.value Selected item's value
		 * @fires submit
		 */
		onSelect: function ( index, item ) {
			this.activeItemIndex = index;
			this.selectedItemIndex = index;
			this.$emit( 'select', item.value );
			this.toggleMenu( false );
		},

		/**
		 * Move to the next item. If we're at the end, go back to the
		 * first item.
		 */
		onArrowDown: function () {
			var index = this.activeItemIndex;
			this.activeItemIndex = this.itemsLength > index + 1 ? index + 1 : 0;
		},

		/**
		 * Move to the previous item. If we're at the beginning, go to
		 * the last item.
		 */
		onArrowUp: function () {
			var index = this.activeItemIndex;
			// Do nothing if there is no active item yet.
			if ( index > -1 ) {
				this.activeItemIndex = index === 0 ? this.itemsLength - 1 : index - 1;
			}
		},

		/**
		 * Change the active item index based on mouseover or mouseleave.
		 *
		 * @param {number} index
		 */
		onActiveItemChange: function ( index ) {
			this.activeItemIndex = index;
		},

		/**
		 * Set menu visibility.
		 *
		 * @param {boolean} show
		 * @return {void}
		 */
		toggleMenu: function ( show ) {
			if ( this.disabled ) {
				return;
			}

			this.showMenu = show;
		},

		/**
		 * Programmatically set the selection if it has been changed by means
		 * other than direct user interaction. Changes made in this way should
		 * never emit "select" events. This method needs to handle all the
		 * different possible forms that the "items" property can take.
		 *
		 * @param {string} selection value of the item to be selected
		 */
		select: function ( selection ) {
			var selectionIndex;
			if ( Array.isArray( this.items ) && typeof this.items[ 0 ] === 'string' ) {
				// Handle array of strings
				// eslint-disable-next-line no-restricted-properties
				selectionIndex = this.items.findIndex( function ( item ) {
					return item === selection;
				} );
			} else if ( Array.isArray( this.items ) && typeof this.items[ 0 ] === 'object' ) {
				// Handle array of objects
				// eslint-disable-next-line no-restricted-properties
				selectionIndex = this.items.findIndex( function ( item ) {
					return item.value === selection;
				} );
			} else {
				// Handle key/value pairs
				// eslint-disable-next-line no-restricted-syntax
				selectionIndex = Object.keys( this.items ).find( function ( key ) {
					return this.items[ key ] === selection;
				} );
			}
			this.selectedItemIndex = selectionIndex;
			this.activeItemIndex = selectionIndex;
		},

		/**
		 * Reset the component to initial values for selection index and
		 * user-visible label
		 */
		reset: function () {
			this.selectedItemIndex = this.initialSelectedItemIndex;
			this.activeItemIndex = -1;
		}
	}
};
</script>

<style lang="less">
@import '../mediawiki.mixins';
@import '../variables.less';

.sd-select {
	max-width: @sd-max-width-input-base;
	position: relative;

	// Expand indicator.
	&__handle {
		.transition( color 100ms );
		color: @color-base;
		// Icon size is based on font size, so we'll set it here to make the
		// indicator smaller than the default font size.
		// Equal to 12px in ems.
		font-size: unit( ( ( @min-size-indicator / @sd-font-size-browser ) / @sd-font-size-base ), em );
		position: absolute;
		right: @sd-padding-horizontal-base;
		top: 50%;
		transform: translateY( -50% );
	}

	&__content {
		.transition( ~'background-color 100ms, border-color 100ms, box-shadow 100ms' );
		background-color: @background-color-framed;
		border: @border-base;
		border-radius: @border-radius-base;
		box-sizing: border-box;
		color: @color-base;
		cursor: pointer;
		min-height: @size-base;
		padding: @sd-padding-vertical-mobile @sd-padding-end-dropdown
			@sd-padding-vertical-mobile @sd-padding-horizontal-base;
		position: relative;
		width: 100%;

		@media screen and ( min-width: @width-breakpoint-tablet ) {
			padding: @sd-padding-vertical-base @sd-padding-end-dropdown
				@sd-padding-vertical-base @sd-padding-horizontal-base;
		}

		&:last-child {
			margin-right: 0;
		}

		&:hover {
			background-color: @background-color-framed--hover;
			color: @color-base--hover;
			border-color: @border-color-base--hover;

			.sd-select__handle {
				color: @color-base--hover;
			}
		}

		&:focus {
			.box-shadow( inset 0 0 0 1px @color-primary );
			border-color: @sd-border-color-base--focus;
			outline: 0;
		}

		&:active {
			color: @color-base--active;
			border-color: @border-color-base--active;
		}
	}

	&--open {
		.sd-select__content {
			background-color: @background-color-framed--hover;
		}

		// stylelint-disable-next-line no-descending-specificity
		.sd-select__handle {
			color: @color-base;
		}
	}

	&--disabled {
		.sd-select__content {
			background-color: @background-color-base--disabled;
			border-color: @border-color-base--disabled;
			color: @color-base--disabled;
			cursor: auto;
			text-shadow: @text-shadow-base--disabled;

			&:hover {
				.sd-select__handle {
					color: @color-base--disabled;
				}
			}

			&:focus {
				.box-shadow( none );
				border-color: @border-color-base--disabled;
				outline: 0;
			}
		}

		// stylelint-disable-next-line no-descending-specificity
		.sd-select__handle {
			color: @color-base--disabled;
		}
	}
}
</style>
