import Core from "@ui5/webcomponents-base/src/sap/ui/webcomponents/base/Core";
import ShadowDOM from "@ui5/webcomponents-base/src/sap/ui/webcomponents/base/compatibility/ShadowDOM";
import Button from "./Button";
import ToggleButtonTemplateContext from "./ToggleButtonTemplateContext";
import ToggleButtonRenderer from "./build/compiled/ToggleButtonRenderer.lit";

// Styles
import belize from "./themes/sap_belize/ToggleButton.less";
import belizeHcb from "./themes/sap_belize_hcb/ToggleButton.less";
import fiori3 from "./themes/sap_fiori_3/ToggleButton.less";

ShadowDOM.registerStyle("sap_belize", "ToggleButton.css", belize);
ShadowDOM.registerStyle("sap_belize_hcb", "ToggleButton.css", belizeHcb);
ShadowDOM.registerStyle("sap_fiori_3", "ToggleButton.css", fiori3);

/**
 * @public
 */
const metadata = {
	tag: "ui5-togglebutton",
	styleUrl: [
		"Button.css",
		"ToggleButton.css",
	],
	usesNodeText: true,
	properties: /** @lends  sap.ui.webcomponents.main.ToggleButton.prototype */ {
		/**
		 * Determines whether the <code>ui5-togglebutton</code> is displayed as pressed.
		 *
		 * @type {boolean}
		 * @public
		 */
		pressed: {
			type: Boolean,
		},
	},
};

/**
 * @class
 *
 *<h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-togglebutton</code> component is an enhanced <code>ui5-button</code>
 * that can be toggled between pressed and normal states.
 * Users can use the <code>ui5-togglebutton</code> as a switch to turn a setting on or off.
 * It can also be used to represent an independent choice similar to a check box.
 * <br><br>
 * Clicking or tapping on a <code>ui5-togglebutton</code> changes its state to <code>pressed</code>. The button returns to
 * its initial state when the user clicks or taps on it again.
 * By applying additional custom CSS-styling classes, apps can give a different style to any <code>ui5-togglebutton</code>.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/ToggleButton";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.ToggleButton
 * @extends Button
 * @tagname ui5-togglebutton
 * @usestextcontent
 * @public
 */
class ToggleButton extends Button {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return ToggleButtonRenderer;
	}

	constructor(state) {
		super(state);
	}

	ontap() {
		if (!this.disabled) {
			this.pressed = !this.pressed;
			this.fireEvent("press", { pressed: this.pressed });
		}
	}

	/*
	* @override
	*/
	onkeydown() {}

	/*
	* @override
	*/
	onkeyup() {}

	static get calculateTemplateContext() {
		return ToggleButtonTemplateContext.calculate;
	}
}

Core.boot().then(_ => {
	ToggleButton.define();
});

export default ToggleButton;
