```mermaid
erDiagram

  User {
    Int id PK 
    String uid  
    String displayName  
    String userName  
    String icon  
    DateTime created  
    DateTime modified  
    }
  

  Post {
    Int id PK 
    String title  
    String regex  
    Int play_count  
    Int for_ranking_count  
    DateTime created  
    DateTime modified  
    }
  
    Post o{--|| User : "author"
```
