// /** @return { import("next-auth/adapters").Adapter } */
// export default function MyAdapter(client:any, options = {}) {
//     return {
//       async createUser(user: any) {
//         return
//       },
//       async getUser(id: any) {
//         return
//       },
//       async getUserByEmail(email: any) {
//         return
//       },
//       async getUserByAccount({ providerAccountId, provider }) {
//         return
//       },
//       async updateUser(user) {
//         return
//       },
//       async deleteUser(userId) {
//         return
//       },
//       async linkAccount(account) {
//         return
//       },
//       async unlinkAccount({ providerAccountId, provider }) {
//         return
//       },
//       async createSession({ sessionToken, userId, expires }) {
//         return
//       },
//       async getSessionAndUser(sessionToken) {
//         return
//       },
//       async updateSession({ sessionToken }) {
//         return
//       },
//       async deleteSession(sessionToken) {
//         return
//       },
//       async createVerificationToken({ identifier, expires, token }) {
//         return
//       },
//       async useVerificationToken({ identifier, token }) {
//         return
//       },
//     }
//   }