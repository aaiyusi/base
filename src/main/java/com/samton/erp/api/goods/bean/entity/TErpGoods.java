package com.samton.erp.api.goods.bean.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import com.samton.platform.framework.base.BaseBean;

public class TErpGoods extends BaseBean implements Serializable {
	//主键ID
    private Long goodsId;

    //SKU编码
    private String sku;

    //原长度SKU
    private String originalSku;

    //中文名称
    private String name;

    //英文名称
    private String eName;

    //商品目录
    private Long catalogiId;

    //商品状态
    private Short saleState;

    //库存总数
    private Integer inventoryCount;

    //申报品名(英文)
    private String declareEName;
    
    //申报品名(中文)
    private String declareName;

    //是否带电池
    private Short haveBattery;
    
    //侵权
    private Short infringement;

    //单品重量(g)
    private BigDecimal weight;

    //销售图片
    private String saleImage;

    //库存图片
    private String storgetImage;

    //虚拟SKU
    private String virtualSku;

    //尺寸-长(cm)
    private BigDecimal gLength;

    //尺寸-宽(cm)
    private BigDecimal gWidth;

    //尺寸-高(cm)
    private BigDecimal gHeight;

    //体积(cm³)
    private BigDecimal volume;

    //统一成本价
    private BigDecimal cost;

    //可包装个数
    private Integer packCount;

    //售价
    private BigDecimal price;

    //体积重(kg)
    private BigDecimal volumeWeight;

    //销售员
    private Long salerUserId;

    //包材
    private Long packingId;

    //备注信息
    private String remark;

    //状态
    private Short state;
    
    //待发货
    private Integer notDeliverCount;
    
    //已发货
    private Integer deliverCount;

	//所属企业ID
    private Long enterpriseId;

    private static final long serialVersionUID = 1L;

    public Long getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Long goodsId) {
        this.goodsId = goodsId;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getOriginalSku() {
        return originalSku;
    }

    public void setOriginalSku(String originalSku) {
        this.originalSku = originalSku;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String geteName() {
        return eName;
    }

    public void seteName(String eName) {
        this.eName = eName;
    }

    public Long getCatalogiId() {
        return catalogiId;
    }

    public void setCatalogiId(Long catalogiId) {
        this.catalogiId = catalogiId;
    }

    public Short getSaleState() {
        return saleState;
    }

    public void setSaleState(Short saleState) {
        this.saleState = saleState;
    }

    public Integer getInventoryCount() {
        return inventoryCount;
    }

    public void setInventoryCount(Integer inventoryCount) {
        this.inventoryCount = inventoryCount;
    }

    public String getDeclareEName() {
        return declareEName;
    }

    public void setDeclareEName(String declareEName) {
        this.declareEName = declareEName;
    }

    public String getDeclareName() {
        return declareName;
    }

    public void setDeclareName(String declareName) {
        this.declareName = declareName;
    }

    public Short getHaveBattery() {
        return haveBattery;
    }

    public void setHaveBattery(Short haveBattery) {
        this.haveBattery = haveBattery;
    }

    public Short getInfringement() {
        return infringement;
    }

    public void setInfringement(Short infringement) {
        this.infringement = infringement;
    }

    public BigDecimal getWeight() {
        return weight;
    }

    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }

    public String getSaleImage() {
        return saleImage;
    }

    public void setSaleImage(String saleImage) {
        this.saleImage = saleImage;
    }

    public String getStorgetImage() {
        return storgetImage;
    }

    public void setStorgetImage(String storgetImage) {
        this.storgetImage = storgetImage;
    }

    public String getVirtualSku() {
        return virtualSku;
    }

    public void setVirtualSku(String virtualSku) {
        this.virtualSku = virtualSku;
    }

    public BigDecimal getgLength() {
        return gLength;
    }

    public void setgLength(BigDecimal gLength) {
        this.gLength = gLength;
    }

    public BigDecimal getgWidth() {
        return gWidth;
    }

    public void setgWidth(BigDecimal gWidth) {
        this.gWidth = gWidth;
    }

    public BigDecimal getgHeight() {
        return gHeight;
    }

    public void setgHeight(BigDecimal gHeight) {
        this.gHeight = gHeight;
    }

    public BigDecimal getVolume() {
        return volume;
    }

    public void setVolume(BigDecimal volume) {
        this.volume = volume;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public Integer getPackCount() {
        return packCount;
    }

    public void setPackCount(Integer packCount) {
        this.packCount = packCount;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getVolumeWeight() {
        return volumeWeight;
    }

    public void setVolumeWeight(BigDecimal volumeWeight) {
        this.volumeWeight = volumeWeight;
    }

    public Long getSalerUserId() {
        return salerUserId;
    }

    public void setSalerUserId(Long salerUserId) {
        this.salerUserId = salerUserId;
    }

    public Long getPackingId() {
        return packingId;
    }

    public void setPackingId(Long packingId) {
        this.packingId = packingId;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Short getState() {
        return state;
    }

    public void setState(Short state) {
        this.state = state;
    }

    public Long getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(Long enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

    public Integer getNotDeliverCount() {
		return notDeliverCount;
	}

	public void setNotDeliverCount(Integer notDeliverCount) {
		this.notDeliverCount = notDeliverCount;
	}

	public Integer getDeliverCount() {
		return deliverCount;
	}

	public void setDeliverCount(Integer deliverCount) {
		this.deliverCount = deliverCount;
	}
}