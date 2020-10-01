// Dependencies
import React from 'react';
import { useParams } from 'react-router-dom';

// APIS
import BookAPI from 'Apis/book';

// Styles

// Container BookCRUD
const BookCRUD = () => {
  // Attributes
  const { id } = useParams<{
    id: string;
  }>();

  // Functions

  // DOM
  return (
    <div>
      <div>a</div>
    </div>
  );
};

export default BookCRUD;
