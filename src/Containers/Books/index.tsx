// Dependencies
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

// Contexts
import { BooksListContext, BooksListProvider } from 'Contexts/booksList';

// Components
import PageTitle from 'Components/PageTitle';
import Field from 'Components/Field';
import IconButton from 'Components/IconButton';
import BooksList from 'Components/BooksList';

// Styles
import { BooksListStyle, BooksListTitle, BooksListFilter } from './style';
import ROUTES from 'consts';

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
      <BooksListTitle>
        <PageTitle>Encontre seu livro favorito aqui!</PageTitle>

        <Link to={ROUTES.CREATE.url}>
          <IconButton icon={faPlus}>Inserir novo livro</IconButton>
        </Link>
      </BooksListTitle>

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

const BooksWrapper = () => {
  return (
    <BooksListProvider>
      <Books />
    </BooksListProvider>
  );
};

export default BooksWrapper;
