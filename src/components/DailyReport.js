import { Clock } from "./Clock";
import { Status } from "./Status";
import { InfoBox } from "./InfoBox";

export function DailyReport(props) {

    if (!props.weather) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div className="p-2 w-72">
            <Clock />
            {/* <Status /> */}
            <svg className='inline-block w-28 h-28 mt-5 mb-5' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M13.002 7.009c3.168 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683a3.687 3.687 0 0 1-3.692 3.682H7.694a3.687 3.687 0 0 1-3.692-3.682a3.687 
                3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.06-4.63 5.228-4.63Zm0 1.497c-2.072 0-3.877 1.634-3.877 3.89c0 .357-.319.638-.684.638h-.69c-1.262 0-2.284 1-2.284 2.236c0 1.235 1.022 2.236 
                2.283 2.236h10.503c1.261 0 2.283-1 2.283-2.236c0-1.235-1.022-2.236-2.283-2.236h-.69c-.366 0-.685-.28-.685-.638c0-2.285-1.805-3.89-3.876-3.89ZM10 4c1.617 0 3.05.815 3.9 2.062a7.496 
                7.496 0 0 0-.898-.053c-.395 0-.775.029-1.139.085a3.22 3.22 0 0 0-5.032 2.062l-.073.414a1 1 0 0 1-.985.827h-.49a1.782 1.782 0 0 0-1.264 3.04c-.315.4-.565.855-.735 1.347a3.282 3.282 
                0 0 1 1.812-5.881l.257-.006A4.72 4.72 0 0 1 10 4Z" />
            </svg>
            <strong className="text-5xl">{props.temperature} <span className="text-sm">°F</span></strong>
            <p className="text-center font-bold text-3xl mb-10">{props.weather}</p>
            <div className="flex justify-evenly">
                <InfoBox heading='Humidity' data={props.humidity} extention='%' />
                <InfoBox heading='Wind speed' data={props.windSpeed} extention=' km/j' />
            </div>
        </div>
    );
}