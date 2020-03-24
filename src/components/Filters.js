import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import { Button } from 'antd'

const Filters = () => (
  <p>
    FILTER : <FilterLink filter={VisibilityFilters.SHOW_ALL}><Button>All</Button></FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}><Button>Active</Button></FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}><Button>Completed</Button></FilterLink>
  </p>
)

export default Filters