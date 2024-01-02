const VisualRoot = ({content, color='black', className=''}) => {
  let root = content.split('/');
  let root_start = root.slice(0, root.length - 1).join('/');
  let root_end = '/' + root[root.length - 1];

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
    <span className={ className + " flex"}> 
      <p className={selectedColor()[0] + ' font-semibold'}> {root_start} </p>
      <p className={selectedColor()[1] + ' font-semibold ms-1'}> {root_end} </p>
    </span>
  )
}

export default VisualRoot