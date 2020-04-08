import * as React from 'react';
import { collapsibleContentWithStyle } from './CollapsibleContent.styles';

const CollapsibleContent = (props) => {

  return (
      <div className="content">
        {props.children}
      </div>
  );

}




export default collapsibleContentWithStyle(CollapsibleContent);
