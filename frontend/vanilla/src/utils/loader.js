import React from "react";

const Loader = ({ isLoading, children, ...props }) => {
    return (
        <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
                children
            )}
        </button>
    );
};

export default Loader;
