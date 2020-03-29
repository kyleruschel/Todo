import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, ListGroup } from 'react-bootstrap';
import './list.scss';

const List = ({ list, remove }) => {
    return (
        <div className='listRootContainer'>
            {list.length ? (
                <Card style={{ width: '19rem' }}>
                    <ListGroup variant="flush">
                        {list.map((e, i) => (
                            <ListGroup.Item
                                className='liStyles'
                                key={i}
                            >
                                {i + 1}. {e}
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    style={{ marginRight: '10px', marginTop: '5px' }}
                                    onClick={() => remove(i)}
                                />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>) : null
            }
        </div>
    )
}

export default List;