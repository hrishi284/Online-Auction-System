package com.onlineauction.fullstackbackend.model;

import javax.persistence.*;





@Entity
@Table(name = "Property")
public class Property {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	private String name;
	private String location;
	private String photos;
	private long area;
	private int rooms;
	private String types;
	private long baseAmount;
	private String description ;
	private String aprovel;
	@OneToOne(fetch = FetchType.LAZY , cascade = CascadeType.ALL )
	@JoinColumn(name = "UID" )
	private User u;
	
	public Property() {
		super();
	}
	
	public Property( String name, String location, String photos, long area, int rooms, String types,
			long baseAmount, String description, String aprovel, User u) {
		super();
		
		this.name = name;
		this.location = location;
		this.photos = photos;
		this.area = area;
		this.rooms = rooms;
		this.types = types;
		this.baseAmount = baseAmount;
		this.description = description;
		this.aprovel = aprovel;
		this.u = u;
	}
	
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getname() {
		return name;
	}
	public void setname(String name) {
		this.name = name;
	}
	public String getlocation() {
		return location;
	}
	public void setlocation(String location) {
		this.location = location;
	}
	public String getphotos() {
		return photos;
	}
	public void setphotos(String photos) {
		this.photos = photos;
	}
	public long getArea() {
		return area;
	}
	public void setArea(long area) {
		this.area = area;
	}
	public int getRooms() {
		return rooms;
	}
	public void setRooms(int rooms) {
		this.rooms = rooms;
	}
	public String gettypes() {
		return types;
	}
	public void setTypes(String types) {
		this.types = types;
	}
	public long getbaseAmount() {
		return baseAmount;
	}
	public void setbaseAmount(long baseAmount) {
		this.baseAmount = baseAmount;
	}
	public String getdescription() {
		return description;
	}
	public void setdescription(String description) {
		this.description = description;
	}
	public String getaprovel() {
		return aprovel;
	}
	public void setaprovel(String aprovel) {
		this.aprovel = aprovel;
	}
	public User getU() {
		return u;
	}
	public void setU(User u) {
		this.u = u;
	}
	@Override
	public String toString() {
		return "Property [pid=" + pid + ", name=" + name + ", location=" + location + ", photos=" + photos + ", area="
				+ area + ", rooms=" + rooms + ", types=" + types + ", baseAmount=" + baseAmount + ", description="
				+ description + ", aprovel=" + aprovel + ", u=" + u + "]";
	}
	
	
	
	
}
