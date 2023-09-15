import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css'],
})
export class MainNewsComponent implements OnInit {
  mArticles: any = Array<any>;
  mSources: any = Array<any>;
  public categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  countryCode = [
    'ar',
    'at',
    'au',
    'be',
    'br',
    'bg',
    'ca',
    'cn',
    'co',
    'cu',
    'cz',
    'eg',
    'fr',
    'de',
    'gr',
    'hk',
    'hu',
    'in',
    'id',
    'ie',
    'il',
    'it',
    'jp',
    'lv',
    'lt',
    'my',
    'mx',
    'ma',
    'nl',
    'nz',
    'ng',
    'no',
    'ph',
    'pl',
    'pt',
    'ro',
    'ru',
    'sa',
    'rs',
    'sg',
    'sk',
    'si',
    'za',
    'kr',
    'se',
    'ch',
    'tw',
    'th',
    'tr',
    'ua',
    'ae',
    'gb',
    'us',
    've',
  ];
  countryName = [
    'Argentina',
    'Austria',
    'Australia',
    'Belgium',
    'Brazil',
    'Bulgaria',
    'Canada',
    'China',
    'Colombia',
    'Cuba',
    'Czechia',
    'Egypt',
    'France',
    'Germany',
    'Greece',
    'Hong Kong',
    'Hungary',
    'India',
    'Indonesia',
    'Ireland',
    'Israel',
    'Italy',
    'Japan',
    'Latvia',
    'Lithuania',
    'Malaysia',
    'Mexico',
    'Morocco',
    'Netherlands',
    'New Zealand',
    'Nigeria',
    'Norway',
    'Philippines',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'Saudi Arabia',
    'Serbia',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Sweden',
    'Switzerland',
    'Taiwan',
    'Thailand',
    'Turkey',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Venezuela',
  ];
  languages = [
    'ar',
    'de',
    'en',
    'es',
    'fr',
    'he',
    'it',
    'nl',
    'no',
    'pt',
    'ru',
    'sv',
    'ud',
    'zh',
  ];

  constructor(private newsapi: ApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    //load articles
    this.newsapi.initArticles().subscribe((data: any) => {
      this.mArticles = data['articles'];
      console.log(data);
    });

    //load new sources
    this.newsapi.initSources().subscribe((data: any) => {
      this.mSources = data['sources'];
      console.log(data);
    });
  }

  searchArticles(source: any) {
    console.log('selected source is: ' + source);
    this.newsapi.getArticlesByID(source).subscribe((data: any) => {
      this.mArticles = data['articles'];
    });
  }

  searchCategory(category: any) {
    console.log('selected source is: ' + category);
    this.newsapi.getArticlesByCategory(category).subscribe((data: any) => {
      this.mArticles = data['articles'];
    });
  }

  searchCountry(country: any) {
    console.log('selected source is: ' + country);
    this.newsapi.getArticlesByCountry(country).subscribe((data: any) => {
      this.mArticles = data['articles'];
    });
  }

}
