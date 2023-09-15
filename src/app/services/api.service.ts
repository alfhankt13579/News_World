import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api_key = '650f160e9c7944d3b1b56243e61f360b';

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?&apiKey=' + this.api_key
    );
  }

  initArticles() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?language=en&sortBy=relevancy&apiKey=' +
        this.api_key
    );
  }

  getArticlesByID(source: any) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }

  getArticlesByCategory(category: any) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?language=en&category=' +
        category +
        '&apiKey=' +
        this.api_key
    );
  }

  getArticlesByCountry(country: any) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?country=' +
        country +
        '&apiKey=' +
        this.api_key
    );
  }
}
