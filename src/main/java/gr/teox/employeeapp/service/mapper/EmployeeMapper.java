package gr.teox.employeeapp.service.mapper;

import gr.teox.employeeapp.domain.*;
import gr.teox.employeeapp.service.dto.EmployeeDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Employee} and its DTO {@link EmployeeDTO}.
 */
@Mapper(componentModel = "spring", uses = { CompanyMapper.class })
public interface EmployeeMapper extends EntityMapper<EmployeeDTO, Employee> {
    @Mapping(target = "company", source = "company", qualifiedByName = "name")
    EmployeeDTO toDto(Employee s);
}
