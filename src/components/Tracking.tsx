import * as React from "react";
export interface ITrackingProps {

}

class Tracking extends React.Component<ITrackingProps, undefined>{
    componentDidMount(){
          webgazer.setGazeListener(function(data, elapsedTime){
              console.log('test');
              console.log(data);
              console.log(elapsedTime);
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