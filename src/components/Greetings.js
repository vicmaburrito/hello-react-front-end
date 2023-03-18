import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings';
import Gretting from './Greeting';
import Loading from './Loading';

function Greetings() {
  const dispatch = useDispatch();
  const { loading, greetings } = useSelector((state) => state.greetingsReducer);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div className="container">
      <span className="border tl" />
      <span className="border tr" />
      <span className="border bl" />
      <span className="border br" />
      <>
        { loading ? (
          <Loading />
        ) : (
          <>
            <h1 className="display-5">Greetings</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Greeting</th>
                  <th scope="col">Language</th>
                </tr>
              </thead>
              { greetings.map((greeting, index) => (
                <Gretting
                  key={greeting.id}
                  message={greeting.message}
                  language={greeting.language}
                  position={index + 1}
                />
              ))}
            </table>
          </>
        )}
      </>
    </div>
  );
}

export default Greetings;
