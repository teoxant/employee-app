package gr.teox.employeeapp.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CompanyMapperTest {

    private CompanyMapper companyMapper;

    @BeforeEach
    public void setUp() {
        companyMapper = new CompanyMapperImpl();
    }
}
