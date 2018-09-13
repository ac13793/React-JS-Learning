import React from 'react';
import { connect } from 'react-redux'; // Connects your component to Redux store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
export const ExpenseList = props => (
  <div>
    <h1>Expense list</h1>
    {props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);
