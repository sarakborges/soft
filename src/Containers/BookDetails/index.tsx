// Dependencies
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// APIS
import BookAPI from 'Apis/book';

// Interfaces
import { Book } from 'Interfaces/book';
import ROUTES from 'consts';

// Components
import Button from 'Components/Button';
import PageTitle from 'Components/PageTitle';
import IconButton from 'Components/IconButton';

// Styles
import {
  BookDetailsStyle,
  BookDetailsList,
  BookTitle,
  BookDescription,
  BookDetailItem,
  BookDetailsActions,
} from './style';

// Container BookDetails
const BookDetails = () => {
  // Attributes
  const [bookInfo, setBookInfo] = useState<Book>();

  const { id } = useParams<{
    id: string;
  }>();

  // Functions
  useEffect(() => {
    (async () => {
      if (!!id) {
        const book: Book | undefined = await BookAPI.getBook(id);

        if (!!book) {
          setBookInfo(() => book);
        }
      }
    })();
  }, [id]);

  // DOM
  return (
    <BookDetailsStyle>
      <BookTitle>
        <PageTitle>
          Detalhes de <span>{`"${bookInfo?.name}"`}</span>
        </PageTitle>

        <Link to={ROUTES.EDIT.url.replace(':id', `${bookInfo?.id}`)}>
          <IconButton icon={faPencilAlt}>Editar</IconButton>
        </Link>
      </BookTitle>

      <BookDetailsList>
        {bookInfo?.description && (
          <BookDescription>{bookInfo?.description}</BookDescription>
        )}

        <BookDetailItem>
          {!!bookInfo?.author ? `${bookInfo?.author}, ` : ''}
          {!!bookInfo?.year ? `${bookInfo?.year}` : ''}
        </BookDetailItem>
      </BookDetailsList>

      <BookDetailsActions>
        <Link to={ROUTES.HOME.url}>
          <Button>Voltar para lista</Button>
        </Link>
      </BookDetailsActions>
    </BookDetailsStyle>
  );
};

export default BookDetails;
