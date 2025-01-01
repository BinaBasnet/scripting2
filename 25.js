let personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [
      { description: "Salary", amount: 5000 },
      { description: "Freelance", amount: 1500 }
    ],
    expenses: [
      { description: "Rent", amount: 1200 },
      { description: "Utilities", amount: 300 }
    ],
    totalIncome: function() {
      return this.incomes.reduce((sum, income) => sum + income.amount, 0);
    },
    totalExpense: function() {
      return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    },
    accountInfo: function() {
      return `${this.firstName} ${this.lastName} - Income: $${this.totalIncome()} - Expenses: $${this.totalExpense()}`;
    },
    addIncome: function(description, amount) {
      this.incomes.push({ description, amount });
    },
    addExpense: function(description, amount) {
      this.expenses.push({ description, amount });
    },
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };

  // Display account info
  document.getElementById("result").innerText = personAccount.accountInfo();