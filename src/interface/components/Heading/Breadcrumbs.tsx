import {
    Breadcrumb as ReactAriaBreadcrumb,
    Breadcrumbs as ReactAriaBreadcrumbs,
} from "react-aria-components";
import { Link, type To } from "react-router-dom";

interface Crumb {
    title: string;
    to: To;
}

export interface BreadcrumbsProps {
    crumbs: Crumb[];
}

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
    const items = crumbs.map((crumb) => (
        <ReactAriaBreadcrumb>
            <Link to={crumb.to}></Link>
        </ReactAriaBreadcrumb>
    ));
    return <ReactAriaBreadcrumbs>{items}</ReactAriaBreadcrumbs>;
};

export default Breadcrumbs;
