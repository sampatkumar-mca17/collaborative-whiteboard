import { ToastrService } from 'ngx-toastr';
import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { collection, Firestore, getDocs, QueryDocumentSnapshot, DocumentData, deleteDoc, doc, query, where } from '@angular/fire/firestore';
import { SharedService } from '../../services/shared.service';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Auth, User } from '@angular/fire/auth';
export interface Card{ title: string; cols: number; rows: number; boardData:DocumentData, boardURL:string, boardID:string }
@Component({
  selector: 'app-whiteboard-dashboard',
  templateUrl: './whiteboard-dashboard.component.html',
  styleUrl: './whiteboard-dashboard.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class WhiteboardDashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private firestore:Firestore;
  protected faTrash = faTrash;
  protected auth:Auth;
  protected userData:User;
  boardsLoading: boolean;
  boards: QueryDocumentSnapshot<DocumentData,DocumentData>[];
  cards: Observable<Card[]> = of([]);
  isHandset: boolean;

  constructor(private sharedService:SharedService, private _router: Router, private toaster:ToastrService){}
  async ngOnInit(): Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.firestore = this.sharedService.getFirestore();
    this.auth = this.sharedService.getAuth();
    this.sharedService.isLoggedIn().subscribe((userData:User) => {
      this.userData = userData;
      this.getBoards();
    })

  }

  /** Based on the screen size, switch from standard to one column per row */

  loadBoard(card:Card){
    this._router.navigate(['/whiteboard/board/'+card.boardID])
  }

  deleteBoard(card:Card){
    if(confirm('Are you sure you want to delete ' + card?.boardData['name'])){
      const c = collection(this.firestore, 'boards');
      this.boardsLoading = true;
      deleteDoc(doc(c, card.boardID)).then(_ => {
        this.toaster.success('Board deleted successfully', 'Success');
        this.getBoards();
      });
    }
  }

  deleteAllBoards(){
    const c = collection(this.firestore, 'boards');
    this.boardsLoading = true;
    deleteDoc(doc(c)).then(_ => {
      this.toaster.success('All boards deleted successfully', 'Success');
      this.getBoards();
    });
  }

  createNewBoard(){
    this._router.navigateByUrl('/whiteboard/board');
  }

  private getBoards(){
    const c = collection(this.firestore, 'boards');
    const q = query(c, where('user','==', this.userData?.email || ''));
    this.boardsLoading = true;
    getDocs(q).then((docs)=>{
      this.boardsLoading = false;
      this.boards =  docs.docs
      this.setCards();
    })
  }

  private setCards(){
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        this.isHandset = matches
        if (matches) {
          return this.boards.map(_ => ({title: 'Card 1', cols: 1, rows: 1, boardData:_.data(), boardURL:_.data()['boardBase64'], boardID:_.id }))
        }

        return this.boards.map(_ => ({title: 'Card 1', cols: 1, rows: 1, boardData:_.data(), boardURL: _.data()['boardBase64'], boardID:_.id }))

      })
    );
  }



}
