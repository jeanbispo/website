import * as React from 'react';
import { collapsibleWithStyle } from './Collapsible.styles';
import withWindowDimensions from '../../../hoc/withWindowDimensions';
import CollapsibleContent from './CollapsibleContent';

const Collapsible = (props) => {

  const [collapsibleStatus, setCollapsibleStatus] = React.useState(null);


  React.useEffect(() => {
    if(props.windowWidth < 600)
    setCollapsibleStatus(true);
    else 
    setCollapsibleStatus(false);
  }, [props.windowWidth]);


  return (
    <div>
    <button type="button" className="collapsible" onClick={() => setCollapsibleStatus(!collapsibleStatus)}>Open Collapsible</button>
        <CollapsibleContent active={collapsibleStatus}>
        {props.children}
        </CollapsibleContent>
    </div>
  );
};

export default withWindowDimensions(collapsibleWithStyle(Collapsible));
