// let num1 = 1;
// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };
// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };
// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }
// (async () => {
//     // const posts = await fetchPostData('/posts');
//     const posts = await fetchData<IPost[]>('/posts');
//     posts[0].
// })();
// Structural typing or duck typing
// interface ICreadential {
//     username: string;
//     password: string;
//     isAdmin?: boolean;
// }
// function login(credentials: ICreadential): boolean {
//     console.log(credentials);
//     return true;
// }
// const user = {
//     username: 'sakshirah',
//     password: 'secret',
//     isAdmin: true,
// };
// login(user);
// interface IAuth {
//     username: string;
//     password: string;
//     login(username: string, password: string): boolean;
// }
// const auth: IAuth = {
//     username: 'sakshirah',
//     password: 'secret',
//     login(username: string, password: string) {
//       return true;
//     }
// }
// inference
// let num = 'Coders';
