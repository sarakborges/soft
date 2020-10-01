// Dependencies
import React, { useContext } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Contexts
import { BooksListContext } from 'Contexts/booksList';

// Components
import PageTitle from 'Components/PageTitle';
import Field from 'Components/Field';
import BooksList from 'Components/BooksList';

// Styles
import { BooksListStyle, BooksListFilter } from './style';

// Container BooksList
const Books = () => {
  // Attributes
  const { state, dispatch } = useContext(BooksListContext);
  const { filter } = state;

  // Functions
  const setFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    dispatch({
      type: 'SET_FILTER',
      data: e.target.value.toLocaleLowerCase(),
    });
  };

  // DOM
  return (
    <BooksListStyle>
      <PageTitle>Encontre seu livro favorito aqui!</PageTitle>

      <BooksListFilter>
        <Field
          placeholder="Você pode filtrar pelo título do livro"
          value={filter}
          name="filter"
          label={faSearch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e)}
        />
      </BooksListFilter>

      <BooksList />
    </BooksListStyle>
  );
};

export default Books;
