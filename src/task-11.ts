interface User {
  username: string;
  age: number;
  city?: string;
}

enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

const createUserCard = ({ username, age, city }: User, role: Role): string => {
  if (!city) {
    return `${username} (${age}) - ${role} from "Unknown"`;
  }
  return `${username} (${age}) - ${role} from ${city}`;
};

console.log(
  createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, Role.Admin)
);
// Anna (25) — admin from Kyiv

console.log(createUserCard({ username: "Max", age: 30 }, Role.Guest));
// Max (30) — guest from Unknown
