//Type Alias

type StringOrNum = string | number;

type objWithName = { name: string; uid: number };

const gypsyDetails = (uid: StringOrNum, item: String) => {
  console.log(`${item} has a uid of ${uid}`);
};

const titanUser = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello`);
};

const links = (user: objWithName) => {
  console.log(`${user.name} says hi`);
};
