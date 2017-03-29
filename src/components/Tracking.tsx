import * as React from "react";

declare var webgazer:any;

export interface ITrackingProps {
}

class Tracking extends React.Component<ITrackingProps, undefined>{
    componentDidMount(){
          webgazer.setGazeListener(function(data:string, elapsedTime:string){
              console.log('inside listener');
          }).begin();
    }

    render(){
        return(
            <div>
                to jest webgazer tracking!
            </div>
        );
    }
}

export default Tracking;