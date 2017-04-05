import * as React from "react";

declare const webgazer: any;

export interface ITrackingProps {

}

interface IData{
    x:string;
    y:string;
}

class Tracking extends React.Component<ITrackingProps, undefined> {
    componentDidMount() {
        window.localStorage.clear();
        setTimeout(() => {
            if (webgazer.isReady) {
                webgazer
                    .setRegression('ridge')
                    .setTracker('clmtrackr')
                    .setGazeListener(
                        function (data: string, elapsedTime: string) {
                            if(data !== null) this.onSetCursor(data);
                            console.log('data',data);
                        })
                    // .begin()
                    .showPredictionPoints(true);

            } else {
                console.log('NotReady');
            }
        }, 100)
    }

    onSetCursor(data: IData){
        const paragraph = document.createElement('p');
        paragraph.style.left = `${data.x}px`;
        paragraph.style.top = `${data.y}px`;
        document.appendChild(paragraph);
    }
    render() {
        return (
            <div>
                to jest webgazer tracking!
            </div>
        );
    }
}

export default Tracking;