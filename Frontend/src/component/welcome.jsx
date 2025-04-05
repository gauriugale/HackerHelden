import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Welcome = () => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div
                    className="position-fixed top-50 start-50 translate-middle bg-light border rounded shadow p-4"
                    style={{ zIndex: 1050, width: "90%", maxWidth: "400px" }}
                >
                    <button
                        type="button"
                        className="btn-close position-absolute top-0 end-0 m-2"
                        aria-label="Close"
                        onClick={closePopup}
                    ></button>
                    <h5 className="text-center mb-3">Welcome!</h5>
                    <p className="text-center">
                        "The beautiful thing about learning is that nobody can take it away
                        from you." - B.B. King
                    </p>
                </div>
            )}
        </>
    );
};

export default Welcome;