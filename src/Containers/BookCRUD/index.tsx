// Dependencies
import React, { useEffect, useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';

// APIS
import BookAPI from 'Apis/book';

// Interfaces
import { Book } from 'Interfaces/book';
import ROUTES from 'consts';

// Components
import Field from 'Components/Field';
import Button from 'Components/Button';
import PageTitle from 'Components/PageTitle';

// Styles
import { CRUDForm, CRUDFormRow, CRUDActions } from './style';

// Container BookCRUD
const BookCRUD = () => {
  // Attributes
  const [bookInfo, setBookInfo] = useState<Book>({
    id: 0,
    name: '',
    isRented: false,
  });
  const [bookName, setBookName] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);

  const { id } = useParams<{
    id: string;
  }>();

  // Functions
  const sendBook = async () => {
    if (!!id) {
      await BookAPI.editBook(id, { ...bookInfo, id: parseInt(id) });
    } else {
      await BookAPI.createBook(bookInfo);
    }

    setIsDone(() => true);
  };

  useEffect(() => {
    (async () => {
      if (!!id) {
        const book: Book | undefined = await BookAPI.getBook(id);

        if (!!book) {
          setBookInfo(() => book);
          setBookName(() => book.name);
        }
      }
    })();
  }, [id]);

  // DOM
  return (
    <>
      {!!isDone && <Redirect to={ROUTES.HOME.url} />}

      <CRUDForm
        onSubmit={() => {
          sendBook();
        }}
      >
        <PageTitle>
          {!!id && (
            <>
              Editando o livro <span>{`"${bookName}"`}</span>
            </>
          )}

          {!id && <>Inserindo novo livro</>}
        </PageTitle>

        <CRUDFormRow>
          <Field
            name="name"
            label={faPencilAlt}
            placeholder="Digite o título do livro aqui"
            value={bookInfo.name || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.persist();

              setBookInfo(prevState => {
                return {
                  ...prevState,
                  name: e.target.value,
                };
              });
            }}
          />
        </CRUDFormRow>

        <CRUDFormRow>
          <Field
            name="author"
            label={faUser}
            placeholder="Digite o nome do autor aqui"
            value={bookInfo.author || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.persist();

              setBookInfo(prevState => {
                return {
                  ...prevState,
                  author: e.target.value,
                };
              });
            }}
          />
        </CRUDFormRow>

        <CRUDFormRow>
          <Field
            name="year"
            label={faClock}
            placeholder="Digite o ano de publicação do livro aqui"
            value={!!bookInfo.year ? `${bookInfo.year}` : ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.persist();

              setBookInfo(prevState => {
                return {
                  ...prevState,
                  year: parseInt(e.target.value),
                };
              });
            }}
          />
        </CRUDFormRow>

        <CRUDFormRow>
          <Field
            type="textarea"
            placeholder="Digite a descrição do livro aqui"
            value={bookInfo.description || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.persist();

              setBookInfo(prevState => {
                return {
                  ...prevState,
                  description: e.target.value,
                };
              });
            }}
          />
        </CRUDFormRow>

        <CRUDFormRow>
          <CRUDActions>
            <Button type="submit">Enviar</Button>

            <Link to={ROUTES.HOME.url}>
              <Button>Voltar para lista</Button>
            </Link>
          </CRUDActions>
        </CRUDFormRow>
      </CRUDForm>
    </>
  );
};

export default BookCRUD;
