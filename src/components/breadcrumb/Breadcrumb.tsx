import "./Breadcrumb.css";
import React from "react";

interface BreadcrumbProps {
    items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <div className="flex items-center mt-2">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span className="mr-1">{item}</span>
                    {index < items.length - 1 && (
                        <span className="text-xl mb-1 mx-1 sep">&#8250;</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;
