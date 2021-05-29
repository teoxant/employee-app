package gr.teox.employeeapp.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Employee App
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {}
