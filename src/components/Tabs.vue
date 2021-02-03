<template>
	<div class="sd-tabs">
		<div class="sd-tabs__header" :class="headerClasses">
			<div
				class="sd-tabs__tabs-list"
				role="tablist"
				tabindex="0"
				:aria-activedescendant="currentTabId"
				@keydown.left="moveBack"
				@keydown.up.prevent="moveBack"
				@keydown.right="moveForward"
				@keydown.down.prevent="moveForward"
			>
				<div
					v-for="(tab, index) in tabs"
					:id="tab.id + '-label'"
					:key="tab.title"
					:class="determineTabLabelClasses(tab)"
					:aria-selected="tab.name === currentTabName"
					:aria-controls="tab.id"
					class="sd-tabs__tabs-list__item"
					role="tab"
					tabindex="-1"
					@click="selectTab(tab.name)"
					@keyup.enter="selectTab(tab.name)"
				>
					{{ tab.title }}
					<observer
						v-if="isLastTab(index) && supportsObserver"
						@intersect="removeGradientClass"
						@hide="addGradientClass"
					></observer>
				</div>
			</div>
		</div>

		<div class="sd-tabs__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import Observer from './Observer.vue';

/**
 * A group of tabs with a tab menu.
 *
 * Tab can be changed via user click on a tab menu item or by changing the
 * active prop passed to the Tabs component.
 *
 * This component has two slots: the main slot, which is meant to contain Tab
 * components, and the filters slot, which can contain Select components that
 * will be displayed inline with the tabs list in the heading.
 */
// @vue/component
export default {
	name: 'SdTabs',

	components: {
		observer: Observer
	},

	props: {
		active: {
			type: String,
			default: null
		}
	},

	data: function () {
		return {
			tabs: {},
			currentTabName: null,
			hasGradient: false
		};
	},

	computed: {
		headerClasses: function () {
			return {
				'sd-tabs__header--gradient': this.hasGradient
			};
		},

		currentTabId: function () {
			return this.tabs[ this.currentTabName ] ?
				this.tabs[ this.currentTabName ].id + '-label' :
				false;
		},

		supportsObserver: function () {
			return (
				'IntersectionObserver' in window &&
				'IntersectionObserverEntry' in window &&
				'intersectionRatio' in window.IntersectionObserverEntry.prototype
			);
		}
	},

	methods: {
		/**
		 * Change the current tab.
		 *
		 * @param {string} tabName
		 */
		selectTab: function ( tabName ) {
			if ( this.tabs[ tabName ].disabled === true ) {
				return;
			}

			this.currentTabName = tabName;
		},

		/**
		 * Set active attribute on each tab.
		 *
		 * @param {string} currentTabName
		 */
		setTabState: function ( currentTabName ) {
			var tabName;
			for ( tabName in this.tabs ) {
				this.tabs[ tabName ].isActive = tabName === currentTabName;
			}
		},

		/**
		 * Set tab label classes.
		 *
		 * @param {Vue.component} tab
		 * @return {Object}
		 */
		determineTabLabelClasses: function ( tab ) {
			return {
				'sd-tabs__tabs-list__item--current': tab.name === this.currentTabName,
				'sd-tabs__tabs-list__item--disabled': tab.disabled
			};
		},

		/**
		 * Left or up arrow keydown should move to previous tab, if one exists.
		 */
		moveBack: function () {
			var tabNames = Object.keys( this.tabs ),
				previousTabIndex = tabNames.indexOf( this.currentTabName ) - 1;

			if ( previousTabIndex < 0 ) {
				// There is no previous tab, do nothing.
				return;
			}

			this.selectTab( Object.keys( this.tabs )[ previousTabIndex ] );
		},

		/**
		 * Right or down arrow keydown should move to next tab, if one exists.
		 */
		moveForward: function () {
			var tabNames = Object.keys( this.tabs ),
				nextTabIndex = tabNames.indexOf( this.currentTabName ) + 1;

			if ( nextTabIndex >= tabNames.length ) {
				// There is no next tab, do nothing.
				return;
			}

			this.selectTab( tabNames[ nextTabIndex ] );
		},

		/**
		 * Create an object with tabs keyed by their names, then set the
		 * isActive attribute for each tab.
		 */
		initializeTabs: function () {
			var tabs = this.$slots.default;
            this.tabs = {};
            
			tabs.forEach(
				function ( tab ) {
                    if ( tab.componentInstance ) {
                        this.tabs[ tab.componentInstance.name ] = tab.componentInstance;
                    } else {
                        return;
                    }
				}.bind( this )
			);

			// If no active tab was passed in as a prop, default to first one.
			this.currentTabName = this.active ?
				this.active :
				Object.keys( this.tabs )[ 0 ];
			this.setTabState( this.currentTabName );
		},

		/**
		 * @param {string} mediaType bitmap, audio, video, etc.
		 * @return {boolean}
		 */
		isLastTab: function ( mediaType ) {
			var tabKeys = Object.keys( this.tabs );
			return mediaType === tabKeys[ tabKeys.length - 1 ];
		},

		/**
		 * When final tab is out of view, add class that will add a gradient to
		 * indicate to the user that they can horizontally scroll.
		 */
		addGradientClass: function () {
			this.hasGradient = true;
		},

		/**
		 * When final tab is in view, don't show the gradient.
		 */
		removeGradientClass: function () {
			this.hasGradient = false;
		}
	},

	watch: {
		/**
		 * When the tab stored in state changes, select that tab.
		 *
		 * @param {string} newTabName
		 */
		active: function ( newTabName ) {
			this.selectTab( newTabName );
		},

		/**
		 * When the current tab changes, set active states and emit an event.
		 *
		 * @param {string} newTabName
		 */
		currentTabName: function () {
			this.setTabState( this.currentTabName );

			// Don't emit an event if the currentTabName changed as a result of
			// the active prop changing. In that case, the parent already knows.
			if ( this.currentTabName !== this.active ) {
				this.$emit( 'tab-change', this.tabs[ this.currentTabName ] );
			}
		}
	},

	mounted: function () {
		this.initializeTabs();
	}
};
</script>

<style lang="less">
@import '../mediawiki.mixins';
@import '../variables.less';

.sd-tabs {
	&__header {
		.box-shadow( inset 0 -1px 0 0 @border-color-base );
		.flex-display();
		align-items: flex-end;
		justify-content: space-between;

		// Add gradient to suggest to users that they can scroll horizontally to
		// see more tabs.
		&--gradient {
			position: relative;

			&:after {
				.horizontal-gradient( rgba( 255, 255, 255, 0 ), rgba( 255, 255, 255, 1 ), 85%, 100% );
				background-color: transparent;
				content: '';
				height: 100%;
				left: 0;
				pointer-events: none;
				position: absolute;
				top: 0;
				width: 100%;
				z-index: 1;
			}
		}
	}

	// When the viewport width is narrower than the tab list, horizontal
	// scrolling is activated via overflow-x (with the scrollbar hidden).
	&__tabs-list {
		.flex-display();
		// Use momentum-based scrolling in iOS.
		-webkit-overflow-scrolling: touch;
		// Auto-hide scrollbar in IE/Edge.
		-sdms-overflow-style: -sdms-autohiding-scrollbar;
		// Add horizontal scroll when needed.
		overflow-x: auto;
		// Hide scrollbar in Firefox.
		scrollbar-width: none;

		// Hide scrollbar in Safari.
		&::-webkit-scrollbar {
			-webkit-appearance: none;
			display: none;
		}

		&__item {
			.transition( ~'color 100ms, box-shadow 100ms' );
			color: @sd-color-taboption;
			cursor: pointer;
			font-weight: bold;
			margin: @sd-margin-vertical-base @sd-margin-horizontal-mobile 0 0;
			padding: @sd-padding-vertical-mobile @sd-padding-horizontal-base;
			// Don't wrap text since we're using horizontal scrolling.
			white-space: nowrap;

			@media screen and ( min-width: @width-breakpoint-tablet ) {
				margin: @sd-margin-vertical-base @sd-margin-vertical-base 0 0;
				padding: @sd-padding-vertical-base @sd-padding-horizontal-base;
			}

			// Currently selected tab.
			&--current {
				.box-shadow( inset 0 -2px 0 0 @color-primary );
				color: @color-primary;
			}

			&:hover {
				.box-shadow( inset 0 -2px 0 0 @color-primary--hover );
				color: @color-primary--hover;
			}

			// During mousedown.
			&:active {
				.box-shadow( inset 0 -2px 0 0 @color-primary--active );
				color: @color-primary--active;
			}

			&:focus {
				// Focus style is handled elsewhere.
				outline: 0;
			}

			&--disabled {
				color: @color-base--disabled;
				cursor: not-allowed;

				&--current,
				&:hover,
				&:active {
					box-shadow: unset;
					color: @color-base--disabled;
				}
			}
		}

		// For PHP UI.
		label {
			cursor: pointer;
		}

		&:focus {
			outline: 0;

			// If a tab item is clicked, because its tabindex is set to -1, the
			// item itself will take focus. However, if keyboard nav is used,
			// the parent element (with tabindex = 0) will take focus and the
			// style below will apply, acting as a visual focus indicator.
			.sd-tabs__tabs-list__item--current {
				border-radius: 2px;
				box-shadow: inset 0 0 0 2px @color-primary;
			}
		}
	}
}
</style>
