export const EmptyListAlert = (name) => (
  {
    status: 'success',
    title: 'No data!',
    message: `It look like there's no any ${name} in collection`,
  }
);
export const ErrorAlert = (message = 'Something went wrong!.') => (
  {
    status: 'error',
    title: 'Error!',
    message,
  }
);
