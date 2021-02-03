<template>
	<div
		class="sd-message"
		:class="builtInClasses"
		:aria-live="type !== 'error' ? 'polite' : false"
		:role="type === 'error' ? 'alert' : false"
	>
		<sd-icon :icon="icon"></sd-icon>
		<div class="sd-message__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import SdIcon from './Icon.vue';
import { sdIconInfoFilled, sdIconError, sdIconAlert, sdIconCheck } from '../icons.js';
var ICON_MAP = {
    notice: sdIconInfoFilled,
    error: sdIconError,
    warning: sdIconAlert,
    success: sdIconCheck
};

/**
 * User-facing message with icon.
 *
 * See CardStack for usage example.
 */
// @vue/component
export default {
	name: 'SdMessage',

	components: {
		'sd-icon': SdIcon
	},

	props: {
		// Should be one of notice, warning, error, or success.
		type: {
			type: String,
			default: 'notice'
		},

		inline: {
			type: Boolean
		}
	},

	computed: {
		typeClass: function () {
			return 'sd-message--' + this.type;
		},

		builtInClasses: function () {
			var classes = { 'sd-message--block': !this.inline };
			classes[ this.typeClass ] = true;
			return classes;
		},

		icon: function () {
			return ICON_MAP[ this.type ];
		}
	}
};
</script>

<style lang="less">
@import '../mediawiki.mixins';
@import '../variables.less';

.sd-message {
	color: @color-notice;
	font-weight: bold;
	max-width: 50em;
	position: relative;

	&--error {
		color: @color-error;
	}

	&--success {
		color: @color-success;
	}

	&--block {
		color: @color-notice;
		font-weight: normal;
		padding: 16px 24px;

		&.sd-message--notice {
			background-color: @background-color-notice--framed;
			border: @border-notice;
		}

		&.sd-message--error {
			background-color: @background-color-error--framed;
			border: @border-error;
		}

		&.sd-message--warning {
			background-color: @background-color-warning--framed;
			border: @border-warning;
		}

		&.sd-message--success {
			background-color: @background-color-success--framed;
			border: @border-success;
		}
	}

	.sd-icon {
		position: absolute;
	}
}

.sd-message__content {
	margin-left: 2em;
}
</style>

