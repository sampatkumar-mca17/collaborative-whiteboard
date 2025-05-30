import { Component, ElementRef, ViewChild } from '@angular/core';
import { MiroBoardPickerConfig } from '../whiteboard-component/model/whiteboard.model';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-whiteboard-picker',
  imports: [],
  templateUrl: './whiteboard-picker.component.html',
  styleUrl: './whiteboard-picker.component.scss'
})
export class WhiteboardPickerComponent {
  resizedIframe: boolean;
  destroy$:Subject<void>=new Subject<void>();
  @ViewChild('boardContainer',{static:false}) boardContainer:ElementRef<HTMLDivElement>;

  constructor(private sharedService:SharedService,private router:Router){}

  ngOnInit(): void {
    this.sharedService.microBoardStatusChange().pipe(takeUntil(this.destroy$)).subscribe((status)=>{
      if(status.fetchingComplete){
        this.router.navigate(['/whiteboard/board']);
      }
    });
  }
  ngAfterViewChecked(): void {
    this.handleOpenBoardsPickerEnabling();
   }

   ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
   }

  private handleOpenBoardsPickerEnabling(){
    if(!this.boardContainer?.nativeElement?.children?.length && this.resizedIframe){
      this.resizedIframe = false;
      return;
    }
    if(this.boardContainer && !this.resizedIframe){
      this.resizedIframe = true;
      this.sharedService.openBoardsPicker(this.boardContainer);
      setTimeout(()=>{
        this.resizeBoardPickerIframe();
      },0)
    }
  }

  private resizeBoardPickerIframe(){
    const firstChild = this.boardContainer.nativeElement.children?.[0]
    if(firstChild?.tagName === 'IFRAME'){
      firstChild.setAttribute('width','100%');
      firstChild.setAttribute('height','100%');
    }
  }

}
