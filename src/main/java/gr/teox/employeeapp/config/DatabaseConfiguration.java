package gr.teox.employeeapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories("gr.teox.employeeapp.repository")
@EnableTransactionManagement
public class DatabaseConfiguration {}
