---
marp: true
theme: uncover
size: 16:9
class:
  - invert
---

# TypeScript, GraphQL, Codegen

:heart: Amics Per Sempre :heart:

---

**@josepjaume**

desenvolupador de pila completa

---

Codegram

---

~~Codegram~~ -> Factorial

---

![TypeScript](ts.svg)

---

# :hand:

---

- Superset de JavaScript
- Estàticament tipat
- Creat per Micro$oft el 2012

---

<!-- class: default -->

![Rage](./computer-typing.gif)

---

<!-- class: invert -->

![bg contain](date-madness.gif)

---

![](graphql.png)

---

# :hand:

---

- Un llenguatge de consulta
- Fortament Tipat
- Creat per ~~Facebook~~ Meta el 2015

---

Esquema del servidor

```graphql
type Human {
  name: String!
  friends: [Human]
}

type Meetup {
  date: Date!
  attendees: [Human]
}

type Query {
  meetups(last: Int): [Meetup!]
}
```

---

POST /graphql

```grapqhl
query {
  meetups(last: 2) {
    date
    attendees {
      name
      friends {
        name
      }
    }
  }
}
```

---

```json
{
  "meetups" => [
    {
      "date": "2021-11-24T19:54:11.769Z",
      "attendees": [
        { "name": "Anna" },
        { "name": "Núria" }
      ]
    },
    {
      "date": "2021-12-24T19:54:11.769Z",
      "attendees": []
    }
  ]
}
```

---

![bg](ping-pong.gif)

---

![bg](mini-golf.webp)

---

<!-- class: default -->

![w:500](graphql-codegen.png)

---

<!-- class: invert -->

- Sistema que genera codi per nosaltres
- Pensat per gent mandrosa
- Som gent mandrosa

---

```graphql
type Human {
  name: String!
  bio: String
  friends: [Human!]!
}

type Meetup {
  date: Date!
  attendees: [Human!]!
}

type Query {
  meetups(last: Int): [Meetup!]!
}
```

---

```typescript
export type Human = {
  __typename?: "Human";
  name: Scalars["String"];
  friends?: Maybe<Array<Maybe<Human>>>;
};

export type Meetup = {
  __typename?: "Meetup";
  date: Scalars["Date"];
  attendees?: Maybe<Array<Maybe<Human>>>;
};

export type Query = {
  __typename?: "Query";
  meetups?: Maybe<Array<Meetup>>;
};
```

---

![bg contain](typescript-demo.gif)

---

# ⌨️ Codi en directe

Ai mareta
