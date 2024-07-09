import { ElementRef } from "@angular/core";
import { WHITEBOARD_OPTIONS, WHITEBOARD_ZOOM } from "../whiteboard/white-board.constants";
import { MouseTracker } from "../core/mouse-tracker";

export const getSvg = (type: 'person' | 'cursor', userName: string, color: string) => {
  const personSvg = `
    <svg width="60px" height="60px" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5 25.98C29.4725 25.98 33.5 21.9227 33.5 16.9133C33.5 11.904 29.4725 7.84668 24.5 7.84668C19.5275 7.84668 15.5 11.904 15.5 16.9133C15.5 21.9227 19.5275 25.98 24.5 25.98Z" fill="${color}"/>
      <path d="M17.3786 29.2021C17.8814 29.0785 18.3971 29.3313 18.6254 29.7991L22.6893 32.7994C24.5 32.799 24.5 32.7995 26.3105 32.7991L30.3746 29.7991C30.6029 29.3313 31.1186 29.0785 31.6214 29.2021C37.0255 30.5301 42.5 33.238 42.5 37.3116V41.845H6.5V37.3116C6.5 33.238 11.9745 30.5301 17.3786 29.2021Z" fill="${color}"/>
      <text x="50%" y="35" fill="${color}">${userName}</text>
    </svg>
  `;
  const cursorSvg = `
    <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60px" height="60px">
      <path d="M 9 3 A 1 1 0 0 0 8 4 L 8 21 A 1 1 0 0 0 9 22 A 1 1 0 0 0 9.796875 21.601562 L 12.919922 18.119141 L 16.382812 26.117188 C 16.701812 26.855187 17.566828 27.188469 18.298828 26.855469 C 19.020828 26.527469 19.340672 25.678078 19.013672 24.955078 L 15.439453 17.039062 L 21 17 A 1 1 0 0 0 22 16 A 1 1 0 0 0 21.628906 15.222656 L 9.7832031 3.3789062 A 1 1 0 0 0 9 3 z"/>
      <text x="0" y="40" fill="${color}">${userName}!</text>
    </svg>
  `;
  return (type === 'person') ? personSvg : cursorSvg;
}


export const hideSubscriptionDivOfSyncFusion = () =>{
  const divs = document.body.getElementsByTagName('div')
  const textToBeDetected = 'This application was built using a trial version of Syncfusion Essential Studio. To remove the license validation message permanently, a valid license key must be included.'
  for(let i = 0; i < divs.length; i++) {
    if(divs[i].childNodes[1]?.textContent === textToBeDetected){
      divs[i].style.display = 'none'
      break;
    }
  }
}

export const calculateSize = (workarea: HTMLElement) => {
  const dim = {
    w: WHITEBOARD_OPTIONS.canvasWidth,
    h: WHITEBOARD_OPTIONS.canvasHeight,
  };
  let w = workarea?.clientWidth;
  let h = workarea.clientHeight;
  const w_orig = w,
    h_orig = h;
  const zoom = WHITEBOARD_ZOOM;

  const multi = 2;
  w = Math.max(w_orig, dim.w * zoom * multi);
  h = Math.max(h_orig, dim.h * zoom * multi);
  const scroll_x = w / 2 - w_orig / 2;
  const scroll_y = h / 2 - h_orig / 2;

  setTimeout(() => {
    workarea.scrollLeft = scroll_x;
    workarea.scrollTop = scroll_y;
  }, 0);
  return {w, h, dimw:dim.w, dimh:dim.h}

}

export function renderMousePresence(mouseTracker: MouseTracker, div: HTMLDivElement, myself) {
  const onPositionChanged = () => {
    if (myself) {
      const myselfUserName = myself.userName;
      div.innerHTML = '';
      mouseTracker.getMousePresences().forEach((mousePosition, member) => {
        if (member.userName !== myselfUserName) {
          const posDiv = document.createElement('div');
          posDiv.innerHTML = getSvg('person', member.userName, member.additionalDetails.color);
          posDiv.style.position = 'absolute';
          posDiv.style.left = `${mousePosition.x}px`;
          posDiv.style.top = `${mousePosition.y}px`;
          div.appendChild(posDiv);
        }
      });
    }
  }
  onPositionChanged();
  mouseTracker.on('mousePositionChanged', onPositionChanged);
}
