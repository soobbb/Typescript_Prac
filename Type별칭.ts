type Person = {
  id: number;
  name: string;
  email: string;
};

interface Commentary {
  id: number;
  content: string;
  user: Person;
}

let comment: Commentary = {
  id: 1,
  content: "뭐야?",
  user: {
    id: 1,
    name: "soobin",
    email: "123@naver.com",
  },
};

console.log(comment);
