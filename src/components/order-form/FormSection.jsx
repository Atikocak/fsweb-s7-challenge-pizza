import PropTypes from "prop-types";

/**
 * FormSection component
 * Wraps a form section with a title and optional error message.
 * @component of OrderForm
 */
export default function FormSection(props) {
  const { name, label, title, required, children, error } = props;

  return (
    <div id={`form-${name}`} cy-data={`${name}`}>
      {!label && title ? (
        <h3 className="py-2 text-lg font-bold">
          {title}
          <span className="text-red">{required && " *"}</span>
        </h3>
      ) : label ? (
        <label
          htmlFor={`${name}-field`}
          className="label justify-start px-0 text-lg font-bold"
        >
          {title} <span className="ml-1 text-red">{required && " *"}</span>
        </label>
      ) : null}
      {children}
      {error && (
        <p cy-data="error" className="mt-1 text-sm text-red">
          {error}
        </p>
      )}
    </div>
  );
}

FormSection.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.bool,
  title: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};
