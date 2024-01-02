import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const BreadcrumbComponent = ({breadcrumbs, color='black', className=''}) => {
  const selectedColor = () => {
    let textColors = [];
    switch(color) {
      case 'white':
        textColors = ['text-gray-light', 'text-white'];
        break;
      default:
        textColors = ['text-gray-dark', 'text-f-black'];
    }
    return textColors;
  }

  return(
    <Breadcrumbs className={ className + ' ps-0' }>
      {breadcrumbs.map((item, index) => {
        return(
          <Link to={item.route} className={selectedColor()[index !== breadcrumbs.length - 1 ? 0 : 1] + ' font-semibold text-lg'}>
            {item.name}
          </Link>
        )
      })}
    </Breadcrumbs>

  )
}

export default BreadcrumbComponent