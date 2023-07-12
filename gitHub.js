class Github {
  constructor() {
    this.client_id = "affad2798e65f70105f6";
    this.client_secrete = "3e6cc37f315b3f1dfb4cb6baa21b7ab0377ad162";
  }

  async getUser(user) {
    const response = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&cient_screte${this.client_secrete}`
    );

    const resData = await response.json();

    return {
      resData,
    };
  }
}
