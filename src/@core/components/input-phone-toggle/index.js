// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { InputGroup, Input, Label } from 'reactstrap'

const InputPasswordToggle = (props) => {
	// ** Props
	const { label, hideIcon, showIcon, className, htmlFor, placeholder, iconSize, ...rest } = props

	return (
		<Fragment>
			{label ? <Label for={htmlFor}>{label}</Label> : null}
			<InputGroup
				className={classnames({
					[className]: className,
				})}
			>
				<Input
					type="phone"
					placeholder="08012345678"
					/*eslint-disable */
					{...(label && htmlFor
						? {
								id: htmlFor,
						  }
						: {})}
					{...rest}
					/*eslint-enable */
				/>
			</InputGroup>
		</Fragment>
	)
}

export default InputPasswordToggle

// ** PropTypes
InputPasswordToggle.propTypes = {
	hideIcon: PropTypes.node,
	showIcon: PropTypes.node,
	visible: PropTypes.bool,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	iconSize: PropTypes.number,
	label(props, propName, componentName) {
		// ** If label is defined and htmlFor is undefined throw error
		if (props[propName] && props['htmlFor'] === 'undefined') {
			throw new Error('htmlFor prop is required when label prop is present')
		}
	},
	htmlFor(props, propName, componentName) {
		// ** If htmlFor is defined and label is undefined throw error
		if (props[propName] && props['label'] === 'undefined') {
			throw new Error('label prop is required when htmlFor prop is present')
		}
	},
}

// ** Default Props
InputPasswordToggle.defaultProps = {
	visible: false,
}
