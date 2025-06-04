import { CircleHelp, LayoutList, Smartphone } from "lucide-react";

const BreadCrumbComponent = ({ title }) => {
  return (
    <>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a className="text-base-content hover:text-primary">
              <LayoutList />
              Products
            </a>
          </li>
          <li>
            <a className="text-base-content hover:text-primary">
              <Smartphone />
              {title}
            </a>
          </li>
          <li>
            <span className="inline-flex items-center gap-2 text-base-content">
              <CircleHelp />
              Details
            </span>
          </li>
        </ul>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default BreadCrumbComponent;