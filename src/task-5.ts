interface CreateUserProps {
  name: string;
  age: number;
}

interface CreateUser {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: CreateUserProps): CreateUser {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
