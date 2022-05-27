import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-component',
  templateUrl: './story-component.component.html',
  styleUrls: ['./story-component.component.scss']
})
export class StoryComponentComponent implements OnInit {
  storys = [{
    story: {
        "name": "CUIDADO COM O PIX",
      },
      "stories": [
        "assets/images/bg_story.jpg"
      ]
    },
    {
      "story": {
        "name": "DICAS DE SEGURANÇA",
      },
      "stories": [
        "assets/images/bg_story.jpg"
      ]
    },
    {
      "story": {
        "name": "DENUNCIE",
      },
      "stories": [
        "assets/images/bg_story.jpg"
      ]
    },
    {
      "story": {
        "name": "Compartilhe",
      },
      "stories": [
        "assets/images/bg_story.jpg"
      ]
    },
    {
      "story": {
        "name": "WhatsApp",
      },
      "stories": [
        "assets/images/bg_story.jpg"
      ]
    },
    {
      "story": {
        "name": "Golpe do Amor",
      },
      "stories": [
        "assets/images/bg_story.jpg"
      ]
    }
  ]
  loading = true;
  showStory = false
  selectedStory: any;

  constructor() { }

  skeletonStory = {
    'border-radius': '50%',
    height: '105px',
    width: '105px',
    'background-color': '#e1e1e1',
    margin: '0',
    border: '1px solid #d1d1d1'
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 700);
  }

  onClickStory = (story: any) => {
    this.selectedStory = story
    this.showStory = true
  }

  onCloseStorys = () => {
    this.showStory = false
  }

}
