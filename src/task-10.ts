const users: string[] = ["alice", "bob", "charlie"];

interface UserObject {
  id: number;
  name: string;
}

const toUserObjects = (users: string[]): UserObject[] => {
  return users.map((user, index) => ({
    id: index,
    name: user,
  }));
};

console.log(toUserObjects(users));
