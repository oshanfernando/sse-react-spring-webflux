package com.oshan.webfluxdemo.model;

import java.util.Date;

public class Usage {

    private int cpuUsage;

    private int memoryUsage;

    private Date date;

    public Usage() {
    }

    public Usage(int cpuUsage, int memoryUsage, Date date) {
        this.cpuUsage = cpuUsage;
        this.memoryUsage = memoryUsage;
        this.date = date;
    }

    public int getCpuUsage() {
        return cpuUsage;
    }

    public void setCpuUsage(int cpuUsage) {
        this.cpuUsage = cpuUsage;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getMemoryUsage() {
        return memoryUsage;
    }

    public void setMemoryUsage(int memoryUsage) {
        this.memoryUsage = memoryUsage;
    }
}
