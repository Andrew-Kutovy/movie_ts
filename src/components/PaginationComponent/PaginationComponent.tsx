
import React from 'react';
import { Pagination, PaginationProps } from '@mui/material';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PaginationComponentProps extends Omit<PaginationProps, 'onChange'> {
    onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ count, page, onPageChange, ...otherProps }) => {
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        onPageChange && onPageChange(page);
    };

    return (
        <Pagination
            count={count}
            page={page}
            renderItem={(item) => (
                <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                />
            )}
            onChange={handlePageChange}
            {...otherProps}
        />
    );
};

export default PaginationComponent;
