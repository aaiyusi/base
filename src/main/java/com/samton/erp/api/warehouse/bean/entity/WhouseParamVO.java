package com.samton.erp.api.warehouse.bean.entity;


public class WhouseParamVO {

	private long check_id;
	
	private long storage_id;//出入库id
	
	private String whouse_id;//仓库id
	
	private String typeQuery;//出入库类型 1：入库 0：出库
	
	private short type;//出入库类型 1：入库 0：出库
	
	private String create_date;
	
	private String sku;
	
	private String startDate;
	
	private String endDate;
	
	private String storageCode;
	
	private long spaceId;
	
	

	public long getSpaceId() {
		return spaceId;
	}

	public void setSpaceId(long spaceId) {
		this.spaceId = spaceId;
	}


	public String getStorageCode() {
		return storageCode;
	}

	public void setStorageCode(String storageCode) {
		this.storageCode = storageCode;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getCreate_date() {
		return create_date;
	}

	public void setCreate_date(String create_date) {
		this.create_date = create_date;
	}

	public String getWhouse_id() {
		return whouse_id;
	}

	public void setWhouse_id(String whouse_id) {
		this.whouse_id = whouse_id;
	}

	public long getStorage_id() {
		return storage_id;
	}

	public void setStorage_id(long storage_id) {
		this.storage_id = storage_id;
	}

	public long getCheck_id() {
		return check_id;
	}

	public void setCheck_id(long check_id) {
		this.check_id = check_id;
	}

	public String getTypeQuery() {
		return typeQuery;
	}

	public void setTypeQuery(String typeQuery) {
		this.typeQuery = typeQuery;
	}

	public short getType() {
		return type;
	}

	public void setType(short type) {
		this.type = type;
	}


	
	
	    
}
